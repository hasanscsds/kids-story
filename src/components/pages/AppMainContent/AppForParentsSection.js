import React from 'react';
import SectionHeader from './SomeParts/SectionHeader';
import Accordion from 'react-bootstrap/Accordion';
import {Container, Row, Col} from 'react-bootstrap';

function AppForParentsSection () {
   const forParents=[
      {
         id: 1,
         questionary: "Часто задаваемый вопрос про одно?",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus neque magnam deleniti, illum fuga eum laboriosam, odit earum tempora necessitatibus nam repellendus quae ipsam reiciendis similique aperiam incidunt maiores vero pariatur, iure accusamus minima. Explicabo architecto vitae quam, pariatur, odit quibusdam voluptatum doloribus vero labore voluptas tempora perspiciatis voluptate quas repudiandae ab. Officiis repudiandae deserunt, saepe itaque animi ullam ipsam consequatur ut ipsum nihil molestiae, beatae vitae a possimus aliquid velit odio est. At ipsum reprehenderit, temporibus repellat, ullam explicabo quas voluptas odit adipisci quod porro hic exercitationem consequuntur quasi? Officia, tempore. Provident architecto quis quidem ratione quo sunt reprehenderit voluptate pariatur sed corporis ad eum, ipsum nulla enim error laborum deleniti nesciunt et in fuga doloremque. Sequi voluptas beatae veniam. Quis minus dolorum maiores perspiciatis ?",
      },
      {
         id: 2,
         questionary: "опрос про одно?",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus neque magnam deleniti, illum fuga eum laboriosam, odit earum tempora necessitatibus nam repellendus quae ipsam reiciendis similique aperiam incidunt maiores vero pariatur, iure accusamus minima. Explicabo architecto vitae quam, pariatur, odit quibusdam voluptatum doloribus vero labore voluptas tempora perspiciatis voluptate quas repudiandae ab. Officiis repudiandae deserunt, saepe itaque animi ullam ipsam consequatur ut ipsum nihil molestiae, beatae vitae a possimus aliquid velit odio est. At ipsum reprehenderit, temporibus repellat, ullam explicabo quas voluptas odit adipisci quod porro hic exercitationem consequuntur quasi? Officia, tempore. Provident architecto quis quidem ratione quo sunt reprehenderit voluptate pariatur sed corporis ad eum, ipsum nulla enim error laborum deleniti nesciunt et in fuga doloremque. Sequi voluptas beatae veniam. Quis minus dolorum maiores perspiciatis ?",
      },
      {
         id: 3,
         questionary: "если еще есть какие либо вопросы?",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus neque magnam deleniti, illum fuga eum laboriosam, odit earum tempora necessitatibus nam repellendus quae ipsam reiciendis similique aperiam incidunt maiores vero pariatur, iure accusamus minima. Explicabo architecto vitae quam, pariatur, odit quibusdam voluptatum doloribus vero labore voluptas tempora perspiciatis voluptate quas repudiandae ab. Officiis repudiandae deserunt, saepe itaque animi ullam ipsam consequatur ut ipsum nihil molestiae, beatae vitae a possimus aliquid velit odio est. At ipsum reprehenderit, temporibus repellat, ullam explicabo quas voluptas odit adipisci quod porro hic exercitationem consequuntur quasi? Officia, tempore. Provident architecto quis quidem ratione quo sunt reprehenderit voluptate pariatur sed corporis ad eum, ipsum nulla enim error laborum deleniti nesciunt et in fuga doloremque. Sequi voluptas beatae veniam. Quis minus dolorum maiores perspiciatis ?",
      },
      {
         id: 4,
         questionary: "Часто задаваемый вопрос про одно?",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus neque magnam deleniti, illum fuga eum laboriosam, odit earum tempora necessitatibus nam repellendus quae ipsam reiciendis similique aperiam incidunt maiores vero pariatur, iure accusamus minima. Explicabo architecto vitae quam, pariatur, odit quibusdam voluptatum doloribus vero labore voluptas tempora perspiciatis voluptate quas repudiandae ab. Officiis repudiandae deserunt, saepe itaque animi ullam ipsam consequatur ut ipsum nihil molestiae, beatae vitae a possimus aliquid velit odio est. At ipsum reprehenderit, temporibus repellat, ullam explicabo quas voluptas odit adipisci quod porro hic exercitationem consequuntur quasi? Officia, tempore. Provident architecto quis quidem ratione quo sunt reprehenderit voluptate pariatur sed corporis ad eum, ipsum nulla enim error laborum deleniti nesciunt et in fuga doloremque. Sequi voluptas beatae veniam. Quis minus dolorum maiores perspiciatis ?",
      },
      {
         id: 5,
         questionary: "опрос про одно?",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus neque magnam deleniti, illum fuga eum laboriosam, odit earum tempora necessitatibus nam repellendus quae ipsam reiciendis similique aperiam incidunt maiores vero pariatur, iure accusamus minima. Explicabo architecto vitae quam, pariatur, odit quibusdam voluptatum doloribus vero labore voluptas tempora perspiciatis voluptate quas repudiandae ab. Officiis repudiandae deserunt, saepe itaque animi ullam ipsam consequatur ut ipsum nihil molestiae, beatae vitae a possimus aliquid velit odio est. At ipsum reprehenderit, temporibus repellat, ullam explicabo quas voluptas odit adipisci quod porro hic exercitationem consequuntur quasi? Officia, tempore. Provident architecto quis quidem ratione quo sunt reprehenderit voluptate pariatur sed corporis ad eum, ipsum nulla enim error laborum deleniti nesciunt et in fuga doloremque. Sequi voluptas beatae veniam. Quis minus dolorum maiores perspiciatis ?",
      },
      {
         id: 6,
         questionary: "Часто задаваемый вопрос про одно?",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus neque magnam deleniti, illum fuga eum laboriosam, odit earum tempora necessitatibus nam repellendus quae ipsam reiciendis similique aperiam incidunt maiores vero pariatur, iure accusamus minima. Explicabo architecto vitae quam, pariatur, odit quibusdam voluptatum doloribus vero labore voluptas tempora perspiciatis voluptate quas repudiandae ab. Officiis repudiandae deserunt, saepe itaque animi ullam ipsam consequatur ut ipsum nihil molestiae, beatae vitae a possimus aliquid velit odio est. At ipsum reprehenderit, temporibus repellat, ullam explicabo quas voluptas odit adipisci quod porro hic exercitationem consequuntur quasi? Officia, tempore. Provident architecto quis quidem ratione quo sunt reprehenderit voluptate pariatur sed corporis ad eum, ipsum nulla enim error laborum deleniti nesciunt et in fuga doloremque. Sequi voluptas beatae veniam. Quis minus dolorum maiores perspiciatis ?",
      },
      {
         id: 7,
         questionary: "опрос про одно?",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus neque magnam deleniti, illum fuga eum laboriosam, odit earum tempora necessitatibus nam repellendus quae ipsam reiciendis similique aperiam incidunt maiores vero pariatur, iure accusamus minima. Explicabo architecto vitae quam, pariatur, odit quibusdam voluptatum doloribus vero labore voluptas tempora perspiciatis voluptate quas repudiandae ab. Officiis repudiandae deserunt, saepe itaque animi ullam ipsam consequatur ut ipsum nihil molestiae, beatae vitae a possimus aliquid velit odio est. At ipsum reprehenderit, temporibus repellat, ullam explicabo quas voluptas odit adipisci quod porro hic exercitationem consequuntur quasi? Officia, tempore. Provident architecto quis quidem ratione quo sunt reprehenderit voluptate pariatur sed corporis ad eum, ipsum nulla enim error laborum deleniti nesciunt et in fuga doloremque. Sequi voluptas beatae veniam. Quis minus dolorum maiores perspiciatis ?",
      },
      ]

   return (
      <section className={"app__for__parents__section  my-5"}>
         <SectionHeader heading={"Родителям"}/>

         <Container fluid>
            <Row>
               <Col>
                  <Accordion className="for__parents" flush>
                     {
                        forParents.map((item, index)=>
                        <Accordion.Item className="for__parents__item" eventKey={index} key={item.id}>
                           <Accordion.Header className="questionary">{item.questionary}</Accordion.Header>
                           <Accordion.Body className="">
                              <p className="text">{item.text}</p>
                           </Accordion.Body>
                        </Accordion.Item>
                        )
                     }
                  </Accordion>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default AppForParentsSection;