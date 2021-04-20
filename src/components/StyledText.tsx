import React from 'react';
import {Typography} from '@material-ui/core';

interface TextProps {
    content: string | JSX.Element;
    variant: 'h1' | 'h2'| 'h3' | 'h4' | 'h5' | 'h6',
    align?: 'left' | 'center' | 'right';
}

export default function StyledText(props: TextProps): JSX.Element {

    const {content, variant, align} = props;

    return (
        <Typography
            align={align ? align : "center"}
            variant={variant ? variant : "body1"}
            color={"textPrimary"}
            component={"p"}>{content}</Typography>
    );
}
