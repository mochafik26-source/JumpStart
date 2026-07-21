import React from "react";
import styled from "styled-components";
import { useState } from "react";
interface props {
  Techs: string;
}
export default function Selecting({ Techs }: props) {

  return (

	<option value={Techs} key={Techs}>
	{Techs}
	</option>
     );
}


