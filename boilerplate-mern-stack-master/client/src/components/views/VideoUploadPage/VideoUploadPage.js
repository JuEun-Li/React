import React from "react";
import PropTypes from "prop-types";
import {typography, Button,Form, message, Input, Icon} from 'antd';
import TextArea from "antd/lib/input/TextArea";

const { TextArea } = Input;
const { Title } = Typography;

function VideoUploadPage() {
    return (
        <div style={{ maxwidth:'700px', margin:'2rem auto'}}>
            <div style= {{ textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}>Upload Video</Title>
            </div>
            <Form on Submit>
                <div style={{ display:'flex', justifyContent:'space-between'}}>
                    {/* drop zone */}

                    {/* thumb nail */}
                    <div>
                        <img src alt/>
                    </div>
                </div>

                <br/>
                <br/>
                <label>Title</label>

                <Input>
                    onChange
                    value
                </Input>
                <br/>
                <br/>
                <label>Description</label>
                <TextArea>
                    onChange
                    value
                </TextArea>
                <br />
                <br />

                <select onChange>
                    <option key value></option>
                </select>

                <select onChange>
                    <option key value></option>
                </select>

                <Button type="primary" size="large" onClick>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage;
