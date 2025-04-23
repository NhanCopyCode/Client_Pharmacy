import { Button, Container, NewsPageItem, NewsPageSidebarItemCategory, NewsPageSidebarItemNewPost } from "../../components/Client";

function NewsPage() {
	return (
		<Container>
			<div className="grid grid-cols-12 gap-6 mt-4">
				<div className="md:col-span-8 col-span-12">
					<h3 className="font-bold text-[30px]">Tin tức</h3>
					<div className="grid grid-cols-12 gap-6 mt-4">
						<div className="sm:col-span-6 col-span-12">
							<NewsPageItem />
						</div>
						<div className="sm:col-span-6 col-span-12">
							<NewsPageItem />
						</div>
						<div className="sm:col-span-6 col-span-12">
							<NewsPageItem />
						</div>
						<div className="sm:col-span-6 col-span-12">
							<NewsPageItem />
						</div>
					</div>
				</div>
				<div className="md:col-span-4 col-span-12 flex flex-col gap-8">
					<NewsPageSidebarItemCategory />
					<NewsPageSidebarItemNewPost />
				</div>
			</div>
		</Container>
	);
}

export default NewsPage;
