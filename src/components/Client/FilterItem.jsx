function FilterItem({ title, filterArr }) {
	return (
		<div className="rounded-md border border-primary mt-6 overflow-hidden">
			<div className="py-[5px] px-[10px] bg-primary">
				<h3 className="text-[18px] text-white font-bold">
					Chọn mức giá
				</h3>
			</div>
			<div className="p-[10px] bg-white flex flex-col gap-1 max-h-[200px] overflow-y-auto">
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
				<div className="flex items-center gap-2">
					<input type="checkbox" id="check1" />
					<label htmlFor="check1">Dưới 1 triệu</label>
				</div>
			</div>
		</div>
	);
}

export default FilterItem;
