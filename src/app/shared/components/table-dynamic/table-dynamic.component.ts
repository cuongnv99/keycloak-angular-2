import { collectExternalReferences } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TableData } from '../../../models/table.model';

@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.scss']
})
export class TableDynamicComponent implements OnInit {

  tableData: any[];
  tableCol: any[];
  convertedDataTbl: any[] = [];

  rowEditting: any[] = [];
  idxRowEditting: number;
  idxCellEditting: number;
  valueCellEditting: string;

  rowDataRef = {};
  frozenWidth: number;
  frozenCol = [];
  @Input() isEditable: boolean;

  _data: TableData;
  @Input() set data(val) {
    if (val) {
      this._data = val;
      this.tableData = val.datas;
      this.tableCol = val.cells.filter(e => !e.isFrozen);
      let froCol = val.cells.filter(e => e.isFrozen);
      if (froCol && froCol.length > 0) {
        this.frozenCol = froCol;
        this.frozenWidth = this.getFrozenWidth(this.frozenCol);
      } else {
        this.frozenWidth = null;
      }
    }
  };
  get data(): TableData {
    return this._data;
  }
  @Input() scrollHeight: string;
  @Output() onChangeRowTable = new EventEmitter();

  items: MenuItem[];
  @Input() isShowTiredMenu: boolean;

  constructor() { }

  ngOnInit(): void {
    this.scrollHeight = this.scrollHeight ? this.scrollHeight : '250px';
    this.items = [
      {
        label: 'Xem đơn hàng',
      },
      {
        label: 'Thu tiền',
      },
      {
        label: 'Thu tiền và xuất hàng'
      },
      {
        label: 'Bổ sung khuyến mãi'
      },
      {
        label: 'Tạo yêu cầu xuất mới cho khách hàng này'
      },
      {
        label: 'Tạo phiếu chi tiền đã thu và hủy đơn hàng'
      },
      {
        label: 'Xem chứng từ',
        items: [
          {
            label: 'Bằng lái xe',
            items: [
              {
                label: 'A1',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'C9',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'HDSD ô tô',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Bán ô tô',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Lịch sử xem chứng từ'
      },
      {
        label: 'Xuất ra excel'
      },
      {
        label: 'Tạo mã wifi'
      },
      {
        label: 'Xử lý đơn hàng treo'
      },
      {
        label: 'Khôi phục IMEI lắp đặt'
      },
      {
        label: 'Xuất Excel chi tiết đớn hàng'
      },
    ];
  }

  onRowEditInit(rowData) {
    this.rowDataRef = { ...rowData };
  }

  onRowEditSave() {
    this.onChangeRowTable.emit();
  }

  onRowEditCancel(rowIdx: number) {
    this.tableData[rowIdx] = this.rowDataRef;
  }

  getFrozenWidth(arr: any) {
    let width = 0;
    arr.forEach(e => {
      width = width + e.width;
    });
    return width;
  }
}
