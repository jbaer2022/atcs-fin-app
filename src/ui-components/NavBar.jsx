/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, SearchField } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { person, overrides, ...rest } = props;
  const buttonTwoFiveOneOneNineThreeOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonTwoFiveOneOneNineFourOnClick = useNavigateAction({
    type: "url",
    url: "/new",
  });
  return (
    <Flex
      gap="236px"
      direction="row"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="21px 50px 21px 50px"
      backgroundColor="rgba(242,242,242,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        shrink="0"
        height="30px"
        position="relative"
        padding="0px 0px 0px 0px"
        level="4"
        children="Jacob’s App"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Button
        display="flex"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="46px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Home"
        onClick={() => {
          buttonTwoFiveOneOneNineThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button251193")}
      ></Button>
      <Button
        display="flex"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="46px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Add"
        onClick={() => {
          buttonTwoFiveOneOneNineFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button251194")}
      ></Button>
      <SearchField
        display="flex"
        direction="column"
        width="300px"
        shrink="0"
        height="46px"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
    </Flex>
  );
}
