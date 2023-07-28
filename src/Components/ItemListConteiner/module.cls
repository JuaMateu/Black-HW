Sub Remove_Hidden_Names()
    ' Dimension variables.
    Dim xName As Variant

    ' Loop once For each name in the workbook.
    For Each xName In ActiveWorkbook.Names
        'If a name is Not visible (it is hidden)...
        If xName.Visible = False Then
            xName.Delete
        End If
        Next xName
End Sub