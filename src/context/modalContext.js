import React, { Component } from 'react';

const Context = React.createContext();
const { Provider, Consumer } = Context;

class ModalContextProvider extends Component {
    state = {
        isOpen: false,
        props: {},
        type: null
    };

    openModal = (type, props) => {
        this.setState({
            isOpen: true,
            props: props,
            type
        });
    };

    closeModal = () => {
        this.setState({
            isOpen: false,
            props: {},
            type: null
        });
    };

    render() {
        const value = {
            store: this.state,
            openModal: this.openModal,
            closeModal: this.closeModal
        };

        return (
            <Provider
                value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

export {
    ModalContextProvider,
    Consumer as ModalContextConsumer,
    Context as ModalContext
};
