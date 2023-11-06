const extImage = ["png", "jpg", "jpeg", "svg"];
export type Extension = keyof typeof extImage;

export const isImage = (ext: string): boolean => {
	return extImage.includes(ext);
};
