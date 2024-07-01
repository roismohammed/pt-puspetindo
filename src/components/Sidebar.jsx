import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconBuildingBank, IconBuildingStore, IconDashboard, IconDeviceLaptop, IconReportAnalytics, IconReportMoney, IconSettings, IconShoppingBag, IconUser } from '@tabler/icons-react';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'bg-black text-white' : 'text-black';

  return (
    <Fragment>
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-3 text-muted-foreground transition-all">
          Dashboard
          <Link
            to="/"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md flex ${isActive('/')}`}
          >
            <IconDashboard size={21} />
            Beranda
          </Link>

          <Link
            to="/"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex ${isActive('/analist')}`}
          >
            <IconReportAnalytics size={21} />
            Analist
          </Link>

          <Link
            to="/laporan"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex ${isActive('/laporan')}`}
          >
            <IconReportMoney size={21} />
            Laporan
          </Link>
        </span>

        <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-2 text-muted-foreground transition-all">
          Keuangan
          <Link
            to="/"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md flex ${isActive('/pembelian')}`}
          >
            <IconBuildingStore size={21} />
            Pembelian
          </Link>

          <Link
            to="/"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex ${isActive('/penjualan')}`}
          >
            <IconShoppingBag size={21} />
            Penjualan
          </Link>

          <Link
            to="/"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex ${isActive('/pengeluaran')}`}
          >
            <IconBuildingBank size={21} />
            Pengeluaran
          </Link>

        </span>

        <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-2 text-muted-foreground transition-all">
          Pengguna
          <Link
            to="/users"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md flex ${isActive('/users')}`}
          >
            <IconUser size={21} />
            Users
          </Link>
        </span>

        <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-2 text-muted-foreground transition-all">
          Sistem
          <Link
            to="#"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md flex ${isActive('/pengaturan')}`}
          >
            <IconSettings size={21} />
            Pengaturan
          </Link>

          <Link
            to="#"
            className={`pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex ${isActive('/analist')}`}
          >
            <IconDeviceLaptop size={21} />
            Sistem
          </Link>
        </span>
      </nav>
    </Fragment>
  );
}
