import { useState } from 'react';
import UseSlashCommand from '../Hooks/slash';
import { Modal, Form, List, Col, Row, Input, Badge } from 'antd';

function Dashboard() {
    const {
        commands,
        commandValue,
        command,
        onCommandChange,
        onCommandKeyPress,
        inputElement,
        setCommand,
        setCommandValue,
        historyCmd,
        uuidList
    } = UseSlashCommand()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (<>
        <div>
            {<Modal title={<p>Custom Command
                {'  '}<Badge
                    className="site-badge-count-109"
                    count={'Inhancement'}
                    style={{ backgroundColor: '#52c41a' }}
                /></p>} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p style={{ marginBottom: '10px' }}>
                    Hey, Do you like to add custom command and want to get more power? you can simply do by defining custom pattern. It will be only for math define and will follow BODMAS rule.
                    </p>
                <Form
                    form={form}
                    initialValues={{
                        layout: 'vertical',
                    }}
                >
                    <Form.Item>
                        <Input placeholder="Custom Name" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={"Pattern i.e. ${someamout} + ${another_amount}"} />
                    </Form.Item>
                </Form>
            </Modal>}
            <Row>
                <Col span={6}>
                    <List
                        header={<b>History</b>}
                        bordered
                        dataSource={historyCmd}
                        renderItem={item => (
                            <List.Item>
                                {item.cmdValue}
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={6}>
                    <List
                        header={<b>UUID</b>}
                        bordered
                        dataSource={uuidList}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />

                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
            </Row>

        </div>
        <div className="container">
            <div className="command-wrapper">
                {
                    typeof commandValue === 'string' && commandValue?.startsWith("/") &&
                    <ul className="command-list">
                        {
                            commands.filter(e => e.includes(commandValue))?.map((cmd) => {
                                return (
                                    <li key={cmd}>
                                        <a
                                            className={cmd === command ? 'active-command' : ''}
                                            href="/#"
                                            onClick={() => { inputElement?.current?.focus(); setCommand(cmd); setCommandValue(cmd); }}>
                                            {cmd}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        {!commands.filter(e => e.includes(commandValue)).length &&
                            <li className="no-result">
                                No other command found
                            </li>
                        }
                    </ul>
                }
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onCommandKeyPress}
                    autoComplete="off"
                >
                    <div className="input-wrapper">
                        <textarea
                            onChange={onCommandChange}
                            onKeyPress={onCommandKeyPress}
                            value={commandValue}
                            name="command"
                            id="command"
                            ref={inputElement}
                            rows="2" cols="50"
                        />
                        <button onClick={onCommandKeyPress}>Submit</button>
                        {' '}
                        <div style={{ margin: "0px 0px 0px 10px" }}>
                            <button onClick={showModal}>Add Command</button>
                        </div>

                    </div>
                </Form>
                {command === '/interest:' && <div>Please pass arguments comma saperated. in order of P, R, T.</div>}
            </div>

        </div>

    </>

    );
}

export default Dashboard;
