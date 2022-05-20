/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Person } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
export default function NewItem(props) {
  const { person, overrides, ...rest } = props;
  const [
    textFieldOneZeroEightTwoSevenValue,
    setTextFieldOneZeroEightTwoSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldOneZeroEightThreeFourValue,
    setTextFieldOneZeroEightThreeFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldOneZeroEightFourOneValue,
    setTextFieldOneZeroEightFourOneValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldOneZeroEightTwoSevenValue,
      grade: textFieldOneZeroEightThreeFourValue,
      treatment: textFieldOneZeroEightFourOneValue,
    },
    model: Person,
    schema: schema,
  });
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="65px"
      direction="column"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="35px"
      padding="61px 168px 61px 168px"
      backgroundColor="rgba(242,242,242,1)"
      as="form"
      {...rest}
      {...getOverrideProps(overrides, "NewItem")}
    >
      <TextField
        display="flex"
        direction="column"
        width="300px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Name"
        placeholder="Ex. Jacob Baer"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldOneZeroEightTwoSevenValue}
        onChange={(event) => {
          setTextFieldOneZeroEightTwoSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField10827")}
      ></TextField>
      <TextField
        display="flex"
        direction="column"
        width="300px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Grade"
        placeholder="Ex. 12"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldOneZeroEightThreeFourValue}
        onChange={(event) => {
          setTextFieldOneZeroEightThreeFourValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField10834")}
      ></TextField>
      <TextField
        display="flex"
        direction="column"
        width="300px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Treatment"
        placeholder="Ex. Ice Bath"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldOneZeroEightFourOneValue}
        onChange={(event) => {
          setTextFieldOneZeroEightFourOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField10841")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Submit"
        onClick={() => {
          buttonOnClick();
        }}
        onMouseOut={() => {
          buttonOnMouseOut();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
