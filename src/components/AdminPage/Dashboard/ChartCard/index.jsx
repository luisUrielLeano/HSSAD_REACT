import React from 'react';
import { Card } from 'antd';

import * as S from './styles';
const ChartCard = (props) => {

    const renderContent = () => {
        const {
            contentHeight,
            title,
            avatar,
            action,
            total,
            footer,
            children,
            loading,
        } = props;

        return (
            <S.ChartCard>
                <S.ChartTop>
                    <S.avatar>{avatar}</S.avatar>
                    <S.MetaWrap>
                        <S.Meta>
                            <S.Title>{ title }</S.Title>
                            <S.Action>{ action }</S.Action>
                        </S.Meta>
                        <S.Total>{ total }</S.Total>
                    </S.MetaWrap>
                    
                </S.ChartTop>
                {children && (
                    <S.Content style={{ height: contentHeight || 'auto' }}>
                        <S.ContentHeight>{ children }</S.ContentHeight>
                    </S.Content>
                )}
                {footer && <S.Footer>{ footer }</S.Footer>}
            </S.ChartCard>   
        );
    };

    return (
        <Card loading={false} bodyStyle={{ padding: '20 px 24px 8px 24px'}}>
            {renderContent()}
        </Card>
    );
}

export default ChartCard;