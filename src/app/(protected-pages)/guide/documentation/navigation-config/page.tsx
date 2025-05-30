'use client'

import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import DemoComponentApi from '@/components/docs/DemoComponentApi'

const Page = () => {
    return (
        <>
            <p>
                We form our navigation structure as array of objects & render it
                into UI eventually. You can change or customize the app
                navigation very easily by accessing{' '}
                <code>src/configs/navigation.config/index.ts</code>
            </p>
            <p>Here is the type for a single menu item</p>
            <SyntaxHighlighter language="ts">{`export type HorizontalMenuMeta = {
    layout: 'default'
} | {
    layout: 'columns'
    showColumnTitle?: boolean
    columns: 1 | 2 | 3 | 4 | 5
} | {
    layout: 'tabs'
    columns: 1 | 2 | 3 | 4 | 5
}

export interface NavigationTree {
    key: string
    path: string
    isExternalLink?: boolean
    title: string
    translateKey: string
    icon: string
    type: 'title' | 'collapse' | 'item'
    authority: string[]
    subMenu: NavigationTree[]
    description?: string
    meta?: {
        horizontalMenu?: HorizontalMenuMeta
        description?: {
            translateKey: string
            label: string
        }
    }
}
`}</SyntaxHighlighter>
            <br />
            <DemoComponentApi
                hideApiTitle
                keyText="properties"
                api={[
                    {
                        api: [
                            {
                                propName: 'key',
                                type: `<code>string</code></code>`,
                                default: `-`,
                                desc: 'An key that match with the route for highlighting purpose',
                            },
                            {
                                propName: 'path',
                                type: `<code>string</code>`,
                                default: '-',
                                desc: 'An URL that this menu item link to',
                            },
                            {
                                propName: 'isExternalLink',
                                type: `<code>boolean</code>`,
                                default: '-',
                                desc: 'Whether to open link in new tab upon click',
                            },
                            {
                                propName: 'title',
                                type: `<code>string</code>`,
                                default: '-',
                                desc: 'Rendered text of this menu item',
                            },
                            {
                                propName: 'translateKey',
                                type: `<code>string</code>`,
                                default: '-',
                                desc: 'Translate key to translate the rendered text in menu item, fallback to <code>title</code> if empty or invalid',
                            },
                            {
                                propName: 'icon',
                                type: `<code>string</code>`,
                                default: '-',
                                desc: 'Render icon in menu item, string value must tally with object key in <code>navigation-icon.config.tsx</code>',
                            },
                            {
                                propName: 'type',
                                type: `<code>'title'</code>  | <code>'collapse'</code> | <code>'item'</code>`,
                                default: `-`,
                                desc: 'To define the type of current menu item',
                            },
                            {
                                propName: 'authority',
                                type: `<code>string[]</code>`,
                                default: `-`,
                                desc: 'Display menu items to users who have the roles given, there will be no access block if the this field is undefine or empty array',
                            },
                            {
                                propName: 'subMenu',
                                type: `<code>navigationConfig[]</code>`,
                                default: `-`,
                                desc: `Whether have child in this menu item, it will render a menu group under this menu item, if the <code>type</code> is <code>'title'</code> or <code>'collapse'</code>, this field accept properties within this table`,
                            },
                            {
                                propName: 'meta',
                                type: `<code>{
        horizontalMenu?: HorizontalMenuMeta
        description?: {
            translateKey: string
            label: string
        }
    }</code>`,
                                default: `-`,
                                desc: `This is an optional configuration field for navigation. It can include additional information that's only needed in specific use cases`,
                            },
                            {
                                propName: 'meta.horizontalMenu',
                                type: `<code>{
    layout: 'default'
} | {
    layout: 'columns'
    showColumnTitle?: boolean
    columns: 1 | 2 | 3 | 4 | 5
} | {
    layout: 'tabs'
    columns: 1 | 2 | 3 | 4 | 5
}</code>`,
                                default: `-`,
                                desc: `Further configuration for horizontal menu, e.g <code>layout</code>, <code>columns</code> & etc.`,
                            },
                            {
                                propName: 'meta.description',
                                type: `<code>navigationConfig[]</code>`,
                                default: `-`,
                                desc: `Description of the page, description only available when <code>themeConfig.layout.type</code> is <code>'contentOverlay'</code>`,
                            },
                        ],
                    },
                ]}
            />
            <p>An example of structured navigation config</p>
            <SyntaxHighlighter language="ts">{`const navigationConfig = [
    {
        key: 'uiComponent',
        path: '',
        title: 'Ui Component',
        translateKey: 'nav.uiComponents',
        icon: 'uiComponents',
        type: 'title',
        authority: ['admin', 'user'],
        /** We can define mnu config here, if we are using horizontal menu */
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            {
                key: 'uiComponent.common',
                path: '',
                title: 'Common',
                translateKey: 'nav.uiComponentsCommon.common',
                icon: 'common',
                type: 'collapse',
                authority: ['admin', 'user'],
                subMenu: [
                    {
                        key: 'uiComponent.common.button',
                        path: '/button',
                        title: 'Button',
                        translateKey: 'nav.uiComponentsCommon.button',
                        icon: '',
                        type: 'item',
                        authority: ['admin', 'user'],
                        subMenu: []
                    },
                    {
                        key: 'uiComponent.common.typography',
                        path: '/typography',
                        title: 'Typography',
                        translateKey: 'nav.uiComponentsCommon.typography',
                        icon: '',
                        type: 'item',
                        authority: ['admin', 'user'],
                        subMenu: []
                    }
                ]
            }
        ]
    }
]`}</SyntaxHighlighter>
            <div className="mt-10" id="configuringNavigationIcon">
                <h5>Configuring navigation icon</h5>
                <p className="mt-1">
                    Navigation icon configuration placed on seperate file in{' '}
                    <code>src/configs/navigation-icon.config.tsx</code>
                </p>
                <p>
                    In the above example, we use string value{' '}
                    <code>uiComponents</code> in the <code>icon</code> field, we
                    must then use this value in{' '}
                    <code>navigation-icon.config.ts</code> to define the icon
                    for the callout.
                </p>
                <p>
                    First, import the icon you want from{' '}
                    <a
                        href="https://react-icons.github.io/react-icons/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        react-icons
                    </a>
                </p>
                <SyntaxHighlighter language="ts">{`import { FaBeer } from 'react-icons/fa'

const navigationIcon = {}
`}</SyntaxHighlighter>
                <p>
                    Set the value used in <code>icon</code> field as & the
                    imported icon component as value
                </p>
                <SyntaxHighlighter language="tsx">{`import { FaBeer } from 'react-icons/fa'

const navigationIcon = {
    uiComponents: <FaBeer />
}
`}</SyntaxHighlighter>
                <p>
                    Now the corresponding menu item will render{' '}
                    <code>FaBeer</code> as the menu icon.
                </p>
            </div>
        </>
    )
}

export default Page
