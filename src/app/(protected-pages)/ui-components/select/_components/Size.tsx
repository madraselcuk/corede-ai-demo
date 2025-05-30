import Select from '@/components/ui/Select'

const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
]

const Size = () => {
    return (
        <div>
            <Select
                instanceId="size-small"
                size="sm"
                className="mb-4"
                placeholder="Please Select"
                options={colourOptions}
            ></Select>
            <Select
                instanceId="size-basic"
                className="mb-4"
                placeholder="Please Select"
                options={colourOptions}
            ></Select>
            <Select
                instanceId="basic-large"
                size="lg"
                placeholder="Please Select"
                options={colourOptions}
            ></Select>
        </div>
    )
}

export default Size
