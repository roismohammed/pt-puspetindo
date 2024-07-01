import { Card } from '@/components/ui/card'
import Admin from '@/layouts/Admin'
import { IconHome } from '@tabler/icons-react'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Laporan() {
  return (
    <Admin>
      <Card className='p-5'>
        <div className='border-bottom'>
          <div>
            <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
            <h6 className='font-bold text-xl text-gray-600'>Laporan</h6>
          </div>


          <Tabs defaultValue="account" className="w-[400px] mt-5">
            <TabsList>
              <TabsTrigger value="penjualan">Penjualan</TabsTrigger>
              <TabsTrigger value="pembelian">Pembelian</TabsTrigger>
              <TabsTrigger value="pengeluaran">Pengeluaran</TabsTrigger>
            </TabsList>
            <TabsContent value="penjualan">
              <Card className='p-5'>
                Muhammad Rois berhasil membeli sebuah product baru di pt puspetindo
              </Card>
            </TabsContent>
            <TabsContent value="pembelian">Change your password here.</TabsContent>
            <TabsContent value="pengeluaran">Cek hasil pengeluaran.</TabsContent>
          </Tabs>
        </div>

      </Card>
    </Admin>
  )
}
