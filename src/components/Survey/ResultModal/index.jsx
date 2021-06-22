import { Modal } from 'antd';

import * as S from './styles';
import ModalInfo from './ModalInfo.json';
import SvgIcon from '../../../common/SvgIcon';
import Button from '../../../common/Button';

const ResultModal = ({isModalVisible, prediction, handleOk}) => {
    const positive = prediction === '1' ? true : false;
    return (
        <Modal title={ModalInfo.modalTitle}
             visible={isModalVisible} 
             onOk={ handleOk } 
             footer={[
                 <Button key='submit' onClick={handleOk} color={'#0000CC'}>
                     Ok
                 </Button>
             ]}>
            <S.ModalImage>
                <SvgIcon src={positive ? ModalInfo.positiveImage : ModalInfo.negativeImage} width='75rem' height='75rem' />
            </S.ModalImage>
            <S.ModalResult>
                {positive ? ModalInfo.positiveResult : ModalInfo.negativeResult}
                <p>{positive ? ModalInfo.positiveDescription : ModalInfo.negativeDescription}</p>
            </S.ModalResult>
        </Modal>
    );
};

export default ResultModal;