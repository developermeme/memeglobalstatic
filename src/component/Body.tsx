// import { Row, Col, Card, Container } from "react-bootstrap";
// import { data } from "../variables/Variable";

// export default function Body() {
//   const CardHeader = ["PLATFORMS", "OUR BRANDS", "OUR COPERATIONS"];

//   return (
//     <>
//       <Container>
//         <Card style={{ padding: "7%" }}>
//           <>
//             <h1 style={{ textAlign: "center" }}>CONTENT / WORDINGS </h1>
//           </>
//         </Card>
//       </Container>
//       <Container>
//         <Row>
//           {data.map((e: any, index: any) => {
//             return (
//               <>
//                 <Col key={index} xs={12} md={6} lg={6}>
//                   <Card style={{ margin: "6%" }}>
//                     <Row>
//                       <Col lg={6}>
//                         <img src={e?.url} alt="listimg" className="BrandImg" />
//                       </Col>
//                       <Col lg={6}>
//                         <Card.Body>
//                           <Card.Title>Home Craft</Card.Title>
//                           <Card.Text>{e?.discribtion}</Card.Text>
//                         </Card.Body>
//                       </Col>
//                     </Row>
//                   </Card>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//       </Container>
//       <Container>
//         <Card style={{ padding: "7%" }}>
//           <>
//             <h1 style={{ textAlign: "center" }}>OUR ANGEL INVESTORS</h1>
//             <h1 style={{ textAlign: "center" }}>OUR ANGEL INVESTORS</h1>
//           </>
//         </Card>
//       </Container>
//     </>
//   );
// }


import React from 'react'

export default function Body() {
  return (
    <div>Body</div>
  )
}

