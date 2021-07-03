import React, { useState, lazy} from 'react';
import { Form, Input, Row, Col, DatePicker, Radio, Select} from  'antd';

const { Option } = Select;
const Button = lazy(() => import('../../../common/Button'));

const SurveyForm = ({ completeSurvey }) => {
    const [ email, setEmail ] = useState();
    const [ dateOfBirth, setDateOfBirth ] = useState();
    const [ gender, setGender ] = useState();
    const [ educationLevel, setEducationLevel ] = useState();
    const [ occupation, setOccupation ] = useState();
    const [ maritalStatus, setMaritalStatus ] = useState();

    const dateFormat= 'DD/MM/YYYY';

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 }
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 8 }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, dateOfBirth, gender, educationLevel, occupation, maritalStatus };
        completeSurvey(data);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleDateOfBirthChange = (date) =>{
        setDateOfBirth(date);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    
    const handleEducationLevelChange = (educationLevel) =>{
        setEducationLevel(educationLevel);
    }

    const handleOccupationChange = (occupation) => {
        setOccupation(occupation);
    }

    const handleMaritalStatusChange = (maritalStatus) => {
        setMaritalStatus(maritalStatus);
    }

    return (
     <>
        <Form
            { ...layout }
            onSubmit={ handleSubmit }
            >
            <Row>
                <Col span='8'></Col>
                <Col span='8' align='middle'>
                    <p>Ingrese por favor la información solicitada para continuar con el cuestionario correspondiente</p>
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
                <Input placeholder='Ingrese su correo eléctronico'/>
            </Form.Item>
            <Form.Item
                label='Fecha de nacimiento'
                name='dateOfBirth'
                value={ dateOfBirth }
                rules={[{required:true, message: 'Ingresa tu fecha de nacimiento'}]}
            >
                <DatePicker placeholder='Fecha' onChange={ handleDateOfBirthChange }format={ dateFormat }/>
            </Form.Item>
            <Form.Item
                label='Género'
                name='gender'
                value={ gender }
                onChange={ handleGenderChange }
                rules={[{required:true, message: 'Ingresa tu genéro'}]}
            >
                <Radio.Group>
                    <Radio.Button value='Masculino'>Masculino</Radio.Button>
                    <Radio.Button value='Femenino'>Femenino</Radio.Button>
                    <Radio.Button value='Otro'>Otro</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label='Nivel de Educación'
                name='educationLevel'
                rules={[{required:true, message: 'Selecciona tu nivel máximo de educación'}]}
            >
                <Select placeholder='Seleccione su nivel de educación' onChange={ handleEducationLevelChange }>
                    <Option value='Preescolar'>Preescolar</Option>
                    <Option value='Educación Primaria'>Educación Primaria</Option>
                    <Option value='Educación Secundaria'>Educación Secundaria</Option>
                    <Option value='Educación Media Superior'>Educación Media Superior</Option>
                    <Option value='Educación No Formal'>Eduación No Formal</Option>
                    <Option value='Licenciatura'>Licenciatura</Option>
                    <Option value='Maestría'>Mestría</Option>
                    <Option value='Doctorado'>Doctorado</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label='Ocupación'
                name='occupation'
                rules={[{required:true, message: 'Selecciona tu situación laboral'}]}
            >
                <Select placeholder='Seleccione su situación laboral' onChange={ handleOccupationChange }>
                    <Option value='Empleado'>Empleado</Option>
                    <Option value='Auto empleado'>Trabajo por cuenta propia</Option>
                    <Option value='Empresario'>Empresario</Option>
                    <Option value='Sin empleo'>Sin Trabajo</Option>
                    <Option value='Am@ de casa'>Am@ de casa</Option>
                    <Option value='Estudiante'>Estudiante</Option>
                    <Option value='Jubilado'>Jubilado</Option>
                    <Option value='Incapaz de trabajar'>Incapaz de trabajar</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label='Estado Civil'
                name='maritalStatus'
                rules={[{required:true, message: 'Selecciona tu estado civil'}]}
            >
                <Select placeholder='Seleccione su estado civil' onChange={ handleMaritalStatusChange }>
                    <Option value='Solter@'>Solter@</Option>
                    <Option value='Unión libre'>Unión Libre</Option>
                    <Option value='Casad@'>Casad@</Option>
                    <Option value='Viud@'>Viud@</Option>
                    <Option value='Separad@'>Separad@</Option>
                    <Option value='Divorciad@'>Divorciad@</Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button  color={'#0000CC'} onClick={ handleSubmit } disabled={!(email && dateOfBirth && gender && educationLevel && occupation && maritalStatus)}>
                    Continuar
                </Button>
            </Form.Item>
        </Form>
            
    </>
    );
}

export default SurveyForm;