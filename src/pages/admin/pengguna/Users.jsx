import Admin from '@/layouts/Admin'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { IconAddressBook, IconHome, IconSearch, IconUserPlus } from '@tabler/icons-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
export default function Users() {
  return (
    <Admin>
      <Card className="p-5">
        <div className='flex justify-between'>
          <div>
            <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
            <h6>Data Kontak</h6>
          </div>

          <div>
            <Link to={'/add-users'}>
              <Button className="bg-slate-900 text-white  gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                <IconUserPlus size={18} />
                Buat Kontak
              </Button>
            </Link>
          </div>
        </div>

        <div className='flex justify-between mt-6'>
          <div className="relative flex flex-col space-y-1.3">
            <Input id="name" placeholder="Search..." className="pl-10" />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IconSearch size={16} />
            </div>
          </div>
           
          <div>
            <Link>
              <Button className="bg-slate-100 text-white  gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                <IconUserPlus size={18} />
                Kolom
              </Button>
            </Link>
          </div>
        </div>

        <Card className="mt-3">
          <Table>
            <TableHeader className='bg-slate-100'>
              <TableRow>
                <TableHead className="w-[100px]">RID</TableHead>
                <TableHead>NIK</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Departemen</TableHead>
                <TableHead>Jabatan</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Card>

    </Admin >
  )
}


