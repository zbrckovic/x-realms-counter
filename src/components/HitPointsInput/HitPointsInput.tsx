import React, { FC } from 'react'
import { NumericFormat } from 'react-number-format'

const MIN_HIT_POINTS = 0
const MAX_HIT_POINTS = 320

interface Props {
    className?: string
    value: string
    onChange: (value: string) => void
}

export const HitPointsInput: FC<Props> = ({ className, value, onChange }) =>
    <NumericFormat
        className={className}
        value={value}
        allowLeadingZeros={false}
        allowNegative={false}
        isAllowed={values => {
            if (values.value.includes('.')) return false
            if (values.value.length > 3) return false
            if (values.floatValue !== undefined) {
                if (values.floatValue < MIN_HIT_POINTS || values.floatValue > MAX_HIT_POINTS) return false
            }
            return true
        }}
        onValueChange={(values, sourceInfo) => {
            console.log(typeof values.floatValue)
            console.log(sourceInfo)
            onChange(`${values.floatValue}`)
        }}
        onBlur={() => {
            const number = parseInt(value)

            if (isNaN(number)) {
                onChange('0')
            }

            if (isNaN(parseInt(value))) {
                onChange('0')
            }
        }}
    />
