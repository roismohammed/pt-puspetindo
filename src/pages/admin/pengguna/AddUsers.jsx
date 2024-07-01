import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Admin from '@/layouts/Admin'
import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'

const statuses = [
  {
    value: "aktif",
    label: "Aktif",
  },
  {
    value: "non-aktif",
    label: "Non-Aktif",
  }
]

export default function AddUser() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Admin>
      <Card className="p-5">
        <Link to={"/users"} className='text-sm text-gray-600'>Users</Link>
        <div>
          <h1 className='font-bold text-xl'>Tambah Kontak Baru</h1>
          <form className='mt-5'>
            <div className='my-5'>
              <div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name:</Label>
                  <Input id="name" placeholder="Masukkan Nama " />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-3">
                <div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="department">Departemen:</Label>
                    <Input id="department" placeholder="Masukkan Nama Departemen " />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="position">Jabatan:</Label>
                    <Input id="position" placeholder="Masukkan Nama Jabatan " />
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="status">Pilih Status:</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                      >
                        Pilih Status
                        {/* {value
                          ? statuses.find((status) => status.value === value)?.label
                          : "Pilih Status"} */}
                        <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Cari status..." />
                        <CommandEmpty>Status tidak ditemukan.</CommandEmpty>
                        <CommandItem
                          value={'Pelajar'}>
                          Pelajar
                        </CommandItem>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

              </div>
            </div>

            <Button type="submit">Simpan</Button>
          </form>
        </div>
      </Card>
    </Admin>
  )
}
