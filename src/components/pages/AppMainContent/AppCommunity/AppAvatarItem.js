import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import AppCommunityModal from "./AppCommunityModal";

function AppAvatarItem ({item, className}) {
   const [show, setShow] = useState(false);

   function toggleModal (){
      setShow(!show);
   } 

   return (
         <Card className={`avatar__item border-0 ${className}`}  key={item.id} onClick={toggleModal}> 
            <Card.Img className="avatar__img" variant="top" src={item.avatarImg} />
            <Card.Body className="avatar__details p-0">
               <h4 className="avatar__position">{item.avatarPosition}</h4>
               <h6 className="avatar__name">{item.avatarName}</h6>
               <p className="avatar__profession">{item.avatarProfession}</p>
               <p className="avatar__experience">{item.avatarExperience}</p>
               <div class="socials">
                  <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fab fa-vk"></i></a>
                  <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fab fa-telegram-plane"></i></a>
                  <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram-square"></i></a>
               </div>
               <AppCommunityModal toggleModal={toggleModal} show={show} item={item}/>
            </Card.Body>
         </Card>
   );
};

export default AppAvatarItem;