import { Card, Button, Avatar } from 'antd';
import { HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

// Pleasant background colors
const pleasantColors = ['#E3F2FD', '#F3E5F5', '#E8F5E8', '#FFF3E0', '#FCE4EC', '#E0F2F1'];

function UserCard({ user, onEdit, onDelete, onLike }) {
  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(user.username)}&options[mood][]=happy`;
  const randomColor = pleasantColors[Math.floor(Math.random() * pleasantColors.length)];

  return (
    <Card
      style={{
        width: '100%',
        maxWidth: 300,
        backgroundColor: randomColor,
        borderRadius: 16,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
      cover={
        <img
          alt={`${user.name}'s Avatar`}
          src={avatarUrl}
          style={{ height: 150, borderRadius: '12px 12px 0 0' }}
        />
      }
      actions={[
        <Button
          type="text"
          icon={user.liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
          onClick={() => onLike(user.id)}
        />,
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={() => onEdit(user)}
        />,
        <Button
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(user.id)}
          danger
        />
      ]}
    >
      <Meta
        avatar={<Avatar src={avatarUrl} />}
        title={user.name}
        description={
          <div>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        }
      />
    </Card>
  );
}

export default UserCard;
