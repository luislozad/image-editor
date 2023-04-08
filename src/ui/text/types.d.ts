export interface FontMap {
    [font_name: string]: FontData;
}

export interface FontData {
    font_id:        string;
    font_family:    string;
    font_css_file:  string;
    font_license:   string;
    font_css_class: string;
    font_variants:  FontVariant[];
}

export interface FontVariant {
    weight:    string;
    style:     string;
    file:      string;
    css_class: string;
}