import React from 'react';
import {Typography} from '@material-ui/core';
import {Variant} from '@material-ui/core/styles/createTypography';

interface TextProps {
    content: string | JSX.Element;
    title?: boolean;
    subtitle?: boolean;
    align?: 'left'| 'center' | 'right';
}

export default function StyledText(props: TextProps): JSX.Element {

    const {content, title, subtitle, align} = props;
    let variant: Variant = "body1";

    if (subtitle) variant = "h3";
    if (title) variant = "h2";

    return (
        <Typography
            align={align ? align : "center"}
            variant={variant}
            color={"primary"}
            component={"p"}>{content}</Typography>
    );
}
