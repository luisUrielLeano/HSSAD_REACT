import React from 'react';

import { Button, Col, Divider, Input, Popconfirm, Row } from 'antd';
import {
    DeleteOutlined,
    PlusOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';

const { Search } = Input;

const Header = ({ addNewPath, hasSelected, handleSearch}) => {
    
    const handleAddNew = () => {
        //Maybe should just use LINK component
    }
    
    return (
        <>
            <Row>
                <Col>
                    <Search
                        placeholder='Search'
                        onSearch={handleSearch}
                        allowClear
                        style={{ float: 'left', width: 350}}
                    />
                </Col>
                <Col flex='auto'>
                    <Button
                        icon={<PlusOutlined/>}
                        type='primary'
                        style={{ float: 'right '}}
                        onClick={handleAddNew}
                    >
                        Añadir
                    </Button>
                    <Button
                        icon={<DeleteOutlined/>}
                        disabled={!hasSelected}
                        style={{ float: 'right', marginRight: 12}}
                    >
                        <Popconfirm
                            title='Seguro que desea eliminar?'
                            icon={<QuestionCircleOutlined style={{color: 'red' }} />}
                            onConfirm={() => {}}
                        >
                            Delete
                        </Popconfirm>
                        
                    </Button>
                </Col>
            </Row>
            <Divider />
        </>
    );
}

export default Header;