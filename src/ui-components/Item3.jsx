/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Person } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Heading, View } from "@aws-amplify/ui-react";
export default function Item3(props) {
  const { person, overrides, ...rest } = props;
  const buttonTwoThreeEightFiveThreeOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${person?.id}`,
  });
  const buttonTwoThreeEightFiveFourOnClick = useDataStoreDeleteAction({
    id: person?.id,
    model: Person,
    schema: schema,
  });
  return (
    <View
      width="1189px"
      height="226px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(242,242,242,1)"
      {...rest}
      {...getOverrideProps(overrides, "Item3")}
    >
      <Button
        display="flex"
        position="absolute"
        top="40px"
        left="1030.5px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Edit"
        onClick={() => {
          buttonTwoThreeEightFiveThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button23853")}
      ></Button>
      <Button
        display="flex"
        position="absolute"
        top="141px"
        left="1026.5px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonTwoThreeEightFiveFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button23854")}
      ></Button>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="98px"
        left="741px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="4"
        children={person?.createdAt}
        {...getOverrideProps(overrides, "Heading23855")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="93px"
        left="529px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="3"
        children={person?.treatment}
        {...getOverrideProps(overrides, "Heading23873")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="69px"
        left="60px"
        direction="row"
        width="331px"
        height="89px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        level="1"
        children={person?.name}
        {...getOverrideProps(overrides, "Heading23857")}
      ></Heading>
      <Divider
        height="226px"
        position="absolute"
        top="0px"
        left="445px"
        padding="0px 0px 0px 0px"
        size="large"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider23858")}
      ></Divider>
      <Divider
        height="226px"
        position="absolute"
        top="0px"
        left="702px"
        padding="0px 0px 0px 0px"
        size="large"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider23859")}
      ></Divider>
      <Divider
        height="226px"
        position="absolute"
        top="0px"
        left="959px"
        padding="0px 0px 0px 0px"
        size="large"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider23860")}
      ></Divider>
    </View>
  );
}
