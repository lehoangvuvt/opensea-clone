import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import {
  FilterContainer,
  Tag,
  CheckboxContainer,
  Checkbox,
  PanelHeader,
} from "../style";
import checkMarkImg from "./check-mark.svg";

const MultipleFilter = ({
  filterType = "tag",
  flexDirection = "row",
  headerName = null,
  propertyName = null,
  keys = [],
  selectedKeys = [],
  onKeysChange,
  valueField = null,
  nameField = null,
  resetFilter,
}) => {
  const settings = { openAnimation: null, expandIconPosition: 'right' } 
  const { Panel } = Collapse;
  const [allKeys, setAllKeys] = useState([]);

  const onChange = (key) => {
    console.log(key);
  };

  const handleData = () => {
    setAllKeys(keys);
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleClick = (key) => {
    if (valueField) {
      if (selectedKeys.findIndex((sKey) => sKey === key[valueField]) === -1) {
        onKeysChange(propertyName, [...selectedKeys, key[valueField]]);
      } else {
        const newSelectedKeys = selectedKeys.filter(
          (sKey) => sKey !== key[valueField]
        );
        if (newSelectedKeys?.length > 0) {
          onKeysChange(propertyName, newSelectedKeys);
        } else {
          resetFilter(propertyName);
        }
      }
    } else {
      if (selectedKeys.findIndex((sKey) => sKey === key) === -1) {
        onKeysChange(propertyName, [...selectedKeys, key]);
      } else {
        const newSelectedKeys = selectedKeys.filter((sKey) => sKey !== key);
        if (newSelectedKeys?.length > 0) {
          onKeysChange(propertyName, newSelectedKeys);
        } else {
          resetFilter(propertyName);
        }
      }
    }
  };

  const checkIfSelected = (key) => {
    let isSelected = false;
    if (valueField) {
      isSelected = selectedKeys.find((sKey) => sKey === key[valueField]);
    } else {
      isSelected = selectedKeys.find((sKey) => sKey === key);
    }
    return isSelected;
  };

  const renderTags = () => {
    return (
      allKeys?.length > 0 &&
      allKeys.map((key, i) => (
        <Tag
          className={checkIfSelected(key) ? "selected" : null}
          onClick={() => {
            handleClick(key);
          }}
          key={i}
        >
          {nameField ? key[nameField] : key}
        </Tag>
      ))
    );
  };

  const renderCheckboxes = () => {
    return (
      allKeys?.length > 0 &&
      allKeys.map((key, i) => (
        <CheckboxContainer
          className={checkIfSelected(key) ? "selected" : "not-selected"}
          onClick={() => {
            handleClick(key);
          }}
          key={i}
        >
          {nameField ? key[nameField] : key}
          <Checkbox
            className={checkIfSelected(key) ? "selected" : "not-selected"}
          >
            <img alt="checkmark-icon" src={checkMarkImg} />
          </Checkbox>
        </CheckboxContainer>
      ))
    );
  };

  return (
    <Collapse
      {...settings}
      defaultActiveKey={[propertyName]}
      onChange={onChange}
    >
      <Panel
        header={
          <PanelHeader>
            {headerName}{" "}
            <button
              style={{ display: "none" }}
              onClick={() => {
                resetFilter(propertyName);
              }}
            >
              Reset
            </button>
          </PanelHeader>
        }
        key={propertyName}
      >
        <FilterContainer flexDirection={flexDirection}>
          {filterType === "tag" && renderTags()}
          {filterType === "checkbox" && renderCheckboxes()}
          {filterType === "range" && renderCheckboxes()}
        </FilterContainer>
      </Panel>
    </Collapse>
  );
};

export default MultipleFilter;
