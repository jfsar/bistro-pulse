interface CardHeadingProps {
    title: string;
};

const CardHeading = ({title}: CardHeadingProps) => {
  return (
    <div className='border-l-8 hidden h-6 md:flex items-center pl-4 border-brand-primary'>
        <h2 className="text-brand-neutral-07 font-semibold text-lg leading-6">{title}</h2>
    </div>
  )
}

export default CardHeading;