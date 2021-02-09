import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import HomePageModalLoginContainer from '../category-nav/home_page_modal_login_container'
import EventLoginContainer from '../event/6.event_modal_login_container'

// class Modal extends React.Component {
function Modal ({ modal, closeModal}) {

        // let {modal } = this.props
        if (!modal) {
            return null;
        }

        let component;
        switch (modal) {
            case 'LogIn':
                component = <HomePageModalLoginContainer />;
                break;
            case 'eventLogIn':
                component = <EventLoginContainer />;
                break;
            default:
                return null;
        }

       return (
           <div className="modal-background" onClick={closeModal}>
               <div className="modal-child" onClick={e => e.stopPropagation()}>
                   {component}
               </div>
           </div>
       )
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);