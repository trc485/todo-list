import React from 'react';
import { Layout } from 'antd';

const {Header, Footer, Content} = Layout;

const AppLayout = ({children}) => (
    <Layout
        style={{minHeight: '100vh'}}
    >
        <Header>
            <h1
                style={{
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                Todo List App
            </h1>
        </Header>
        <Content
            style={{
                padding: '3rem 2rem',
            }}
        >
            <div
                style={{
                    maxWidth: 608,
                    margin: '0 auto',
                    backgroundColor: 'white',
                }}
            >
                {children}
            </div>
        </Content>
        <Footer
            style={{
                textAlign: 'center'
            }}
        >
            Made with ❤ by Thomas Chappel
        </Footer>
    </Layout>
);

export default AppLayout;
