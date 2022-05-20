/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Person } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
export default function UpdateItem(props) {
  const { person, overrides, ...rest } = props;
  const [
    textFieldThreeThreeEightSixTwoValue,
    setTextFieldThreeThreeEightSixTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeThreeEightSixThreeValue,
    setTextFieldThreeThreeEightSixThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeThreeEightSixFourValue,
    setTextFieldThreeThreeEightSixFourValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      name: textFieldThreeThreeEightSixTwoValue,
      grade: textFieldThreeThreeEightSixThreeValue,
      treatment: textFieldThreeThreeEightSixFourValue,
    },
    id: person?.id,
    model: Person,
    schema: schema,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldThreeThreeEightSixTwoValue === "" &&
      person !== undefined &&
      person?.name !== undefined
    )
      setTextFieldThreeThreeEightSixTwoValue(person?.name);
  }, [person]);
  useEffect(() => {
    if (
      textFieldThreeThreeEightSixThreeValue === "" &&
      person !== undefined &&
      person?.grade !== undefined
    )
      setTextFieldThreeThreeEightSixThreeValue(person?.grade);
  }, [person]);
  useEffect(() => {
    if (
      textFieldThreeThreeEightSixFourValue === "" &&
      person !== undefined &&
      person?.treatment !== undefined
    )
      setTextFieldThreeThreeEightSixFourValue(person?.treatment);
  }, [person]);
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
      {...getOverrideProps(overrides, "UpdateItem")}
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
        value={textFieldThreeThreeEightSixTwoValue}
        onChange={(event) => {
          setTextFieldThreeThreeEightSixTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField33862")}
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
        value={textFieldThreeThreeEightSixThreeValue}
        onChange={(event) => {
          setTextFieldThreeThreeEightSixThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField33863")}
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
        value={textFieldThreeThreeEightSixFourValue}
        onChange={(event) => {
          setTextFieldThreeThreeEightSixFourValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField33864")}
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
        onMouseUp={() => {
          buttonOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
