import  { useState } from "react";
import {
  Button,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { ModalPropsType } from "utils/types";

function UpdateNodeModal(props: ModalPropsType) {
  const [title, setTitle] = useState<string>(props.node.data?.label);
  return (
    <Modal isOpen={props.open} toggle={() => props.onToggleModal(!props.open)}>
      <ModalHeader>Update</ModalHeader>
      <ModalBody>
        <Row className="mb-2">
          <Col xxs="12">
            <Label for="Name">Title</Label>
            <Input
              id="Name"
              name="Name"
              defaultValue={props.node.data?.label}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Row className="justify-content-center">
          <Button
            color="success"
            className="mr-2"
            onClick={() => {
              props.onUpdateTitle({ ...props.node, data: { label: title } });
              props.onToggleModal(!props.open);
            }}
          >
            save
          </Button>
        </Row>
      </ModalFooter>
    </Modal>
  );
}

export default UpdateNodeModal;
