import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(navigate);  // 对应原 history
  console.log(location);  // 对应原 location
  console.log(id);        // 对应原 match.params.id

  return <h1>路游路线详情页面，路线ID：{id}</h1>;
};