import React from 'react';
import Aux from "../hoc/Aux";
import Routes from "../routes";

const layout = (props) => (
    <Aux>
        <Routes>
            <main>
                {props.children}
            </main>
        </Routes>
    </Aux>
);

export default layout;