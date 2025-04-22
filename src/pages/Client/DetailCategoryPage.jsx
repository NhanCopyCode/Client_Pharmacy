import { Container, Filter, FilterItem, Pagination, ProductCard, SortContainer } from "../../components/Client";

function DetailCategoryPage() {
    return (
		<Container>
			<div className="grid grid-cols-12 gap-8">
				<div className="md:col-span-3 col-span-12">
					<Filter />
					<FilterItem />
					<FilterItem />
					<FilterItem />
				</div>
				<div className="md:col-span-9 col-span-12">
					<h3 className="text-[30px] text-black font-bold mb-4">
						Khuyến mãi HOT
					</h3>
					<SortContainer />
					<div className="grid grid-cols-12 gap-3 mt-4">
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
							<ProductCard />
						</div>
					</div>
                    <Pagination />
				</div>
			</div>
		</Container>
	);
}

export default DetailCategoryPage;