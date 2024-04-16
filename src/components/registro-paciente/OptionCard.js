import { Card, Flex, Image } from 'antd'
import Title from 'antd/es/typography/Title';
import React from 'react'
import { Link } from 'react-router-dom';

const OptionCard = ({ children, imgSrc, alt, title, onClick, nextPage }) => {

    const cardStyle = {
        margin: "0 3rem",
        width: "300px",
        height: "400px",
    };

    return (
        <Link 
            to={nextPage}
            style={{
                color: "inherit",
                textDecoration: "none"
            }}
        >
            <Card
                hoverable
                style={cardStyle}
                onClick={onClick}
            >
                <Flex
                    align='center'
                    justify='center'
                    vertical
                    style={{
                        height: "100%"
                    }}
                >
                    <Image
                        src={imgSrc}
                        alt={alt}
                        preview={false}
                        style={{
                            height: "200px"
                        }}
                    />
                    <Title level={2}
                        style={{
                            textAlign: "center",
                            color: "blue",
                            padding: "10px"
                        }}
                    >
                        {title}
                    </Title>
                </Flex>
            </Card>
        </Link>
    )
}

export default OptionCard
