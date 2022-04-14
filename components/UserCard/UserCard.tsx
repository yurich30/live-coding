import {IPropsUserCard} from "../../types/IUserCard";
import {
  Wrapper,
  Username,
  Name,
  Phone,
  Id,
  Email,
  Website
} from './UserCard.styled'



const UserCard = ({ user }: IPropsUserCard) => {
  const {username, name, phone, id, email, website} = user

  return (
    <Wrapper>
      <div>
        <Username>{username}</Username>
        <Name>{name}</Name>
        <Phone>{phone}</Phone>
        <Id>{id}</Id>
        <Email>{email}</Email>
        <Website>{website}</Website>
      </div>
    </Wrapper>
  )
}



export default UserCard
