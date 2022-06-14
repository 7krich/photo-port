import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    // add useState hook to have option to change the categories in future
    const {
        categories =[],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸
                        </span>{" "}
                        Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className ={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            // if true, return navActive
                            currentCategory.name === category.name && !contactSelected && `navActive`
                        }`}
                        // outermost element must have a key attribute
                        // keep track of elements in VDOM
                        key={category.name}
                        >
                            <span 
                                onClick={() => {setCurrentCategory(category);
                                setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;