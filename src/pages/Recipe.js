import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import style from "../components/style.module.css";

export default function Recipe() {
    const [details, setDetails] = useState({});

    const params = useParams();

    const [activeTab, setActiveTab] = useState("instruction");

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        console.log(detailData);
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);
    return (
        <DetailWrapperr>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button
                    className={activeTab === "instruction" ? "active" : ""}
                    onClick={() => {
                        setActiveTab("instruction");
                    }}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === "ingredient" ? "active" : ""}
                    onClick={() => {
                        setActiveTab("ingredient");
                    }}
                >
                    Ingredients
                </Button>

                {activeTab==='instruction'&&(
                <div>
                    <h3>{details.instructions}</h3>
                    </div>
                )}

                {activeTab==="ingredient" &&(
                    <ul>
                        {details.extendedIngredients.map((ingredient)=>{
                            return <li key={ingredient.id}>
                                {ingredient.original}
                            </li>
                        })}
                    </ul>
                )}
            </Info>
        </DetailWrapperr>
    );
}

const DetailWrapperr = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;
