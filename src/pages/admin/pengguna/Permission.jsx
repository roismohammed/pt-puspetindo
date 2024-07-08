import React from 'react'
import Admin from '@/layouts/Admin'
import { Card } from '@/components/ui/card'
import { IconBackpack, IconChevronRight, IconHome, IconUserPlus } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function Permission() {
    return (
        <Admin>
            <Card className="p-5">
                <div className='flex justify-between'>
                    <div >
                        <div className='flex text-sm gap-1'>
                            <Link to={'/'}>
                                <p className=' flex gap-1'>
                                    <IconHome size={18} />
                                    Home
                                </p>
                            </Link>
                            <span className='mt-1'>
                                <IconChevronRight size={14} />
                            </span>
                            <Link to={'/users'}>
                                <p className=' text-gray-600'>users</p>
                            </Link>
                        </div>
                        <div>
                            <h6 className='font-bold'>Permision Pengguna</h6>
                        </div>
                    </div>
                </div>
            </Card>
        </Admin>
    )
}
