import { Fragment, useMemo } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SelectOption<T extends string = string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: Array<SelectOption<T>>;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
}

function Select<T extends string>({
  value,
  onChange,
  options,
  placeholder = '선택',
  className,
  buttonClassName,
}: SelectProps<T>) {
  const selected = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  return (
    <Listbox value={value} onChange={onChange}>
      <div className={cn('relative', className)}>
        <ListboxButton
          className={cn(
            'app-panel flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none',
            buttonClassName
          )}
        >
          <span className="block truncate">
            {selected ? selected.label : <span className="text-neutral-500">{placeholder}</span>}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 opacity-70" aria-hidden />
        </ListboxButton>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="app-panel absolute z-40 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-white/10 py-1 text-sm shadow-lg focus:outline-none">
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                className={({ active }) =>
                  cn(
                    'flex cursor-pointer items-center gap-2 px-4 py-2 text-sm',
                    active ? 'bg-white/10 text-white' : 'text-neutral-100'
                  )
                }
                value={option.value}
              >
                {({ selected: isSelected }) => (
                  <>
                    <span className={cn('block truncate', isSelected && 'font-semibold')}>
                      {option.label}
                    </span>
                    {isSelected ? <Check className="ml-auto h-4 w-4" aria-hidden /> : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}

export default Select;
