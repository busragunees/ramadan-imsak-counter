import { useParams, useNavigate } from "react-router-dom";
import React from 'react';

export function withParamsAndNavigate(Component) {
    return (props) => (<Component{...props} params={useParams()} navigate={useNavigate()}/>);
}