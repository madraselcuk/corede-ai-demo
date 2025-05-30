'use client'

import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'
import WithForm from './WithForm'

const mdPath = 'PatternInputDoc'

const demoHeader = {
    title: 'PatternInput',
    desc: 'PatternInput wrapped Input component with <a class="text-primary underline" href="https://github.com/s-yadav/react-number-format" target="_blank">react-number-format</a>, refer to the <a class="text-primary underline" href="https://s-yadav.github.io/react-number-format/docs/pattern_format" target="_blank">official doc</a> for more usage example .',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: `Basic usage of PatternInput, all <a class="text-primary underline" href="https://s-yadav.github.io/react-number-format/docs/pattern_format" target="_blank">react-number-format props</a> can be apply to this component as well.`,
        component: <Basic />,
    },
    {
        mdName: 'WithForm',
        mdPath: mdPath,
        title: 'WithForm',
        desc: `Example usage with <a class="text-primary underline" href="https://react-hook-form.com/docs/useform" target="_blank">React Hook Form</a>`,
        component: <WithForm />,
    },
]

const demoApi = [
    {
        component: 'PatternInputDoc',
        api: [
            {
                propName: 'inputPrefix',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `-`,
                desc: 'Render a prefix content inside Input',
            },
            {
                propName: 'inputSuffix',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `-`,
                desc: 'Render a suffix content inside Input',
            },
            {
                propName: 'format',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'It defines the format pattern using the # (or a patternChar ) character. # is the placeholder character for numbers',
            },
            {
                propName: 'allowEmptyFormatting',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: `By default PatternFormat component does not apply formatting when value is empty (null, undefined or ''). If you want to apply formatting on empty values set allowEmptyFormatting to true.`,
            },
            {
                propName: 'mask',
                type: `<code>string</code> | <code>Array<string></code>`,
                default: `-`,
                desc: 'Used as mask character for numeric places, until any numeric character is provided for that position. You can provide different mask characters for every numeric positions by passing array of mask characters. Note: The length of mask characters should match the numbers of # patternChar',
            },
            {
                propName: 'patternChar',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'This helps define the format pattern character',
            },
        ],
    },
]

const reactNumberFormatApi = (
    <div className="demo-api-table mb-12">
        <h4 className="mb-5">Dependencies</h4>
        <h6 id="react-number-format-api" className="mb-3">
            React number format
        </h6>
        <p>
            All common React number format props can be applied on this
            component, refer{' '}
            <a
                className="underline text-primary"
                href="https://s-yadav.github.io/react-number-format/docs/props"
                target="_blank"
                rel="noreferrer"
            >
                official docs
            </a>{' '}
            for the complete this.props.first list.{' '}
        </p>
    </div>
)

const PatternInputDoc = () => {
    return (
        <DemoLayout
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            api={demoApi}
            mdPrefixPath="shared"
            extra={reactNumberFormatApi}
        />
    )
}

export default PatternInputDoc
