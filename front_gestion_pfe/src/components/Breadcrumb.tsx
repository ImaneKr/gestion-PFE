// src/components/Breadcrumb.tsx
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter((segment) => segment);

    return (
        <AntBreadcrumb style={{ margin: '16px 0' }} separator=">">
            <AntBreadcrumb.Item>
                <Link to="/" className='font-inter'>Home</Link>
            </AntBreadcrumb.Item>
            {pathSegments.map((segment, index) => {
                const path = `/${pathSegments.slice(0, index + 1).join('>')}`;
                const label = segment.charAt(0).toUpperCase() + segment.slice(1);

                return (
                    <AntBreadcrumb.Item key={path}>
                        <Link to={path} className='font-inter'>{label}</Link>
                    </AntBreadcrumb.Item>
                );
            })}
        </AntBreadcrumb>
    );
};

export default Breadcrumb;
