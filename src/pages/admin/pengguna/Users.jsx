import Admin from '@/layouts/Admin';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { IconHome, IconKey, IconLock, IconSearch, IconUserPlus } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <Admin>
      <Card className="p-5">
        <div className='flex justify-between'>
          <div>
            <Link to={'/'}>
              <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
            </Link>
            <h6 className='text-gray-600 text-lg font-bold'>Data Kontak</h6>
          </div>

          <div>
            <Link to={'/add-users'}>
              <Button className="bg-slate-900 text-white gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                <IconUserPlus size={18} />
                Tambah Pengguna
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
            <Link to="/">
              <Button className="bg-slate-100 text-white gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                <IconUserPlus size={18} />
                Kolom
              </Button>
            </Link>
          </div>
        </div>

        <Card className="mt-3">
          <Table className="container">
            <TableHeader className='bg-slate-200 w-full'>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead className="hidden sm:table-cell">Departemen</TableHead>
                <TableHead className="hidden sm:table-cell">Jabatan</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">Tanggal Di buat</TableHead>
                <TableHead className="hidden md:table-cell text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="font-medium">{item.username}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Refund</TableCell>
                  <TableCell className="hidden sm:table-cell">Karyawan</TableCell>
                  <TableCell className="hidden sm:table-cell items-center justify-center">
                    <p className="text-xs bg-green-400 rounded-sm py-1 px-2 inline-block">Aktif</p>
                  </TableCell>
                  <TableCell>34-03-2024</TableCell>
                  <TableCell className="flex md:table-cell text-right">
                    <Link to='/permission'>
                      <Button className="bg-slate-200 text-sm  gap-2 hover:bg-slate-30
                      0 " variant="outline">
                        <IconKey size={18} />
                        Atur Permission
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Card>
    </Admin>
  );
}
