import { Button, Container, NewsPageItem, NewsPageSidebarItemCategory, NewsPageSidebarItemNewPost } from "../../components/Client";

function NewsPage() {
	return (
		<Container>
			<div className="grid grid-cols-12 gap-6 mt-4">
				<div className="col-span-8">
					<h3 className="font-bold text-[30px]">Tin tức</h3>
					<div className="grid grid-cols-12 gap-6 mt-4">
						<div className="col-span-6">
							<NewsPageItem />
						</div>
						<div className="col-span-6">
							<NewsPageItem />
						</div>
						<div className="col-span-6">
							<NewsPageItem />
						</div>
						<div className="col-span-6">
							<NewsPageItem />
						</div>

					</div>
				</div>
				<div className="col-span-4 flex flex-col gap-8">
                    <NewsPageSidebarItemCategory />
                    <NewsPageSidebarItemNewPost />
                </div>
			</div>
		</Container>
	);
}

export default NewsPage;
