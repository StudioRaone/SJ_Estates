import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Properties = () => {
    return (
        <div className="container">
            <div className='container justify-center' style={{marginTop:"20px", padding:'20px', paddingTop:'60px'}}>
                <h1 style={{textAlign: "center"}}>Our Objectives</h1>
            </div>

            <div style={{ margin: "20px" }}>   
                <Container>
                    <Row>
                        <Col md={4}> {/* 3 columns per row for medium screens and above */}
                            <Card sx={{ maxWidth: 345 , marginTop: "20px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Objectives/sustainableDevelopment.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sustainable Development
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Integrate eco-friendly and sustainable practices into all future projects, prioritizing green building technologies and environmentally conscious urban development
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                        
                        <Col md={4}> {/* Second card */}
                            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Objectives/innovative.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Innovative Property Solutions
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Embrace cutting-edge technologies such as AI, smart building systems, and property management automation to enhance tenant experience and operational efficiency
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                        
                        <Col md={4}> {/* Third card */}
                            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Objectives/patnership.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Strengthen Strategic Partnerships   
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Collaborate with key stakeholders, investors, and industry experts to create joint ventures and explore new real estate opportunities
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}> {/* 3 columns per row for medium screens and above */}
                            <Card sx={{ maxWidth: 345 , marginTop: "20px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Objectives/ccApproach.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Client-Centric Approach
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Focus on delivering personalized and seamless client experiences by improving service offerings, from property acquisition to asset management, and elevating customer satisfaction
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                        
                        <Col md={4}> {/* Second card */}
                            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Objectives/globalApproach.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Global Expansion
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Embrace cutting-edge technologies such as AI, smart building systems, and property management automation to enhance tenant experience and operational efficiency
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                        
                        <Col md={4}> {/* Third card */}
                            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Objectives/fi.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Financial Growth & Stability   
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Aim for consistent revenue growth and financial stability through strategic investments, risk management, and long-term value creation
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Properties;
