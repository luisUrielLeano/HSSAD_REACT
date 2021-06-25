import React, { useState, lazy} from "react";
import { Form, Input, Row, Col, Radio} from 'antd';

const Button = lazy(() => import('../../../../../common/Button'));

const AddUserForm = ({ addUser }) =>{
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 }
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 8 }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, username, password, role };
        addUser(data);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    return(
        <>
            <Form
                { ...layout}
                onSubmit={ handleSubmit }
            >
                <Row>
                    <Col span='8'></Col>
                    <Col span='8' align='middle'>
                        <p>Ingrese los datos del nuevo usuario</p>
                    </Col>
                </Row>
                <Form.Item
                    label='Email'
                    name='email'
                    value={ email }
                    onChange={ handleEmailChange }
                    rules={ [
                        {   required: true, 
                            message: 'Ingresa un Email'},
                        {
                            type: 'email',
                            message: 'El correo no es válido',
                        },
                    ]}
                >
                    <Input placeholder='Ingrese el corre eléctronico'/>     
                </Form.Item>
                <Form.Item
                    label='Username'
                    name='username'
                    value={ username }
                    onChange={ handleUsernameChange }
                    rules={[{required:true, message: 'Ingresa un username para el usuario'}]}
                >
                    <Input placeholder='Ingrese el username'/>
                </Form.Item>
                <Form.Item
                    label='Contraseña'
                    name='password'
                    value={ password }
                    onChange={ handlePasswordChange }
                    rules={[{required:true, message: 'Ingresa una contraseña'}]}
                >
                    <Input.Password placeholder='Ingrese la contraseña'/>
                </Form.Item>
                <Form.Item
                    label='Rol'
                    name='role'
                    value={ role }
                    onChange={ handleRoleChange }
                    rules={[{required:true, message: 'Seleccione el rol del usuario'}]}
                >
                    <Radio.Group>
                        <Radio.Button value='ADMIN'>Administrador</Radio.Button>
                        <Radio.Button value='SUPER'>Super Usuario</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item {...tailLayout}>
                <Button  color={'#0000CC'} onClick={ handleSubmit } disabled={!(email && username && password && role )}>
                    Agregar
                </Button>
            </Form.Item>
            </Form>
        </>

    );
}

export default AddUserForm;