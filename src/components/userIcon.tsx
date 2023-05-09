import React, { useEffect, useState } from "react";

function UserIcon(): JSX.Element {
    const [icon, setIcon] = useState(0);
    useEffect(() => {
        return setIcon(Math.floor(Math.random() * 100));
    }, []);
    return <img src={`https://avatars.dicebear.com/api/human/${icon}.svg`} />;
}

export default UserIcon;
